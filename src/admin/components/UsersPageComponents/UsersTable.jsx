const UsersTable = () => {
  return (
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
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
              Name
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
              Leadership
            </th>
            <th
              scope="col"
              className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
            </th>
            <th scope="col" className="relative px-5 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {[1, 2, 3, 4, 5, 6].map((person) => (
            <tr key={person}>
              <td className="px-3 py-4 whitespace-nowrap">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://randomuser.me/api/portraits/men/${person}.jpg`}
                    alt=""
                  />
                </div>
              </td>

              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Persons Name</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">Person Email</div>
              </td>

              <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Chairman</div>
                <div className="text-sm text-gray-500">Church Committee</div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                User
              </td>
              <td className="pr-8 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
