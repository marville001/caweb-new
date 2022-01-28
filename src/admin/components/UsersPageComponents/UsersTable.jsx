import { useSelector } from 'react-redux';

const UsersTable = () => {

  const {users} = useSelector(state=>state.usersState)

  return (
    <div className="shadow overflow-hidden border-b border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Image
            </th>
            <th
              scope="col"
              className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Firstname 
            </th>
            <th
              scope="col"
              className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Laststname 
            </th>
            <th
              scope="col"
              className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
            </th>
            <th
              scope="col"
              className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Scc Group
            </th>
            <th scope="col" className="relative px-5 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((person, i) => (
            <tr key={person._id}>
              <td className="px-3 py-4 whitespace-nowrap">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                    alt=""
                  />
                </div>
              </td>

              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{person.firstname}</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{person.lastname}</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{person.email}</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{person.role}</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{person.scc}</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">Edit</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
