const employees = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Backend Dev',
    company: 'Microsoft'
  },
  {
    id: '2',
    name: 'Agatha Christie',
    role: 'UI/UX Designer',
    company: 'Google'
  },
  {
    id: '3',
    name: 'Alan Kyle',
    role: 'Frontend Engr',
    company: 'Facebook'
  }
];

export default function Employees() {
  return (
    <div className="App d-flex justify-content-center mt-5 mb-5">
      <div className="w-75">
        <h1>Employees Data</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr className="h5" key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.role}</td>
                <td>{employee.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
