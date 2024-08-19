async function fetchWithToken(url, options = {}) {
    let accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
  
    // Add the access token to the request headers
    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${accessToken}`,
    };
  
    try {
      let response = await fetch(url, options);
  
      if (response.status === 401) {
        // Token expired, attempt to refresh tokens
        const refreshResponse = await fetch('http://localhost:6010/api/v1/admin/refresh-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refreshToken }),
        });
  
        if (refreshResponse.ok) {
          const data = await refreshResponse.json();
          // Save new tokens
          localStorage.setItem('accessToken', data.accessToken);
          if (data.refreshToken) {
            localStorage.setItem('refreshToken', data.refreshToken);
          }
          // Retry the original request with new access token
          options.headers['Authorization'] = `Bearer ${data.accessToken}`;
          response = await fetch(url, options);
        } else {
          // Handle refresh token failure (e.g., redirect to login)
          throw new Error('Session expired, please log in again.');
        }
      }
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        return await response.json();
      } else {
        return await response.text();
      }
    } catch (error) {
      console.error('Error in request:', error);
      throw error;
    }
  }
  
  // Example usage
  (async () => {
    try {
      const data = await fetchWithToken('http://localhost:6010/api/v1/admin/some-protected-route');
      console.log('Data received:', data);
    } catch (error) {
      console.error('Request failed:', error);
    }
  })();