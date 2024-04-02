using TeamTasker.Server.Application.Dtos.Users;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface IEmployeeService
    {
        void CreateEmployee(CreateEmployeeDto userDto);
        IEnumerable<ReadEmployeeDto> GetAllEmployees();
        IEnumerable<ReadUserDto> GetAllUsers();
        ReadEmployeeDto GetEmployee(int id);
        ReadUserDto GetUserByEmail(string email);
        string GetUserPassword(int id);
        ReadUserNameDto GetUserName(int id);
        ReadUserNameAndEmailDto GetUserNameAndEmail(int id);
    }
}
