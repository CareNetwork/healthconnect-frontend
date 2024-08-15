import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Table } from 'react-bootstrap';
import { FaChartLine, FaList } from 'react-icons/fa';

const data = [
  { date: '2024-08-01', pageViews: 400, signUps: 24, logins: 150 },
  { date: '2024-08-02', pageViews: 300, signUps: 20, logins: 200 },
  { date: '2024-08-03', pageViews: 500, signUps: 30, logins: 100 },
  // Add more data as needed
];

const logs = [
  { id: 1, date: '2024-08-01', activity: 'User signup', user: 'john_doe' },
  { id: 2, date: '2024-08-02', activity: 'User login', user: 'jane_smith' },
  // Add more logs as needed
];

const AdminAnalytics = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
        <FaChartLine className="mr-3 text-indigo-500" />
        Site Analytics
      </h2>

      {/* Line Chart for visualizing page views, signups, and logins */}
      <div className="mb-10">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px' }} />
            <Legend verticalAlign="top" align="center" iconType="circle" />
            <Line type="monotone" dataKey="pageViews" stroke="#8884d8" strokeWidth={2} dot={{ r: 5 }} />
            <Line type="monotone" dataKey="signUps" stroke="#82ca9d" strokeWidth={2} dot={{ r: 5 }} />
            <Line type="monotone" dataKey="logins" stroke="#ffc658" strokeWidth={2} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Logs Table */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center">
        <FaList className="mr-2 text-green-500" />
        Activity Logs
      </h3>
      <div className="overflow-x-auto">
        <Table striped bordered hover className="bg-white shadow-md rounded-lg">
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Activity</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id} className="hover:bg-indigo-100 transition-colors duration-150">
                <td>{log.id}</td>
                <td>{log.date}</td>
                <td>{log.activity}</td>
                <td>{log.user}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminAnalytics;
