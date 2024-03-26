using TeamTasker.Server.Application.Dtos.Users;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface IEmployeeService
    {
        void CreateEmployee(CreateEmployeeDto userDto);
        IEnumerable<ReadEmployeeDto> GetAllEmployees();
        ReadEmployeeDto GetEmployee(int id);
        ReadUserDto GetUserByEmail(string email);
        string GetUserPassword(int id);
    }
}
