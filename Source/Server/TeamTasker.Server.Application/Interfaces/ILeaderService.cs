using TeamTasker.Server.Application.Dtos;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface ILeaderService
    {
        void CreateLeader(CreateUserDto userDto);
        IEnumerable<ReadLeaderDto> GetAllLeaders();
        ReadLeaderDto GetLeader(int id);
    }
}
