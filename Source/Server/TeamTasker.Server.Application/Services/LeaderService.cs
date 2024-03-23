using AutoMapper;
using TeamTasker.Server.Application.Dtos;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Infrastructure.Services
{
    public class LeaderService : ILeaderService
    {
        private readonly ILeaderRepository _leaderRepository;
        private readonly IMapper _mapper;

        public LeaderService(ILeaderRepository leaderRepository, IMapper mapper)
        {
            _leaderRepository = leaderRepository;
            _mapper = mapper;
        }

        public void CreateLeader(CreateUserDto userDto)
        {
            if (userDto == null)
                throw new ArgumentNullException(nameof(userDto));

            var leader = _mapper.Map<Leader>(userDto);

            _leaderRepository.CreateLeader(leader);
        }

        public IEnumerable<ReadLeaderDto> GetAllLeaders()
        {
            var leaders = _leaderRepository.GetAllLeaders();
            var leaderDtos = _mapper.Map<IEnumerable<ReadLeaderDto>>(leaders);

            return leaderDtos;
        }

        public ReadLeaderDto GetLeader(int id)
        {
            var leader = _leaderRepository.GetLeader(id);

            if (leader == null)
                return null;

            var leaderDto = _mapper.Map<ReadLeaderDto>(leader);

            return leaderDto;
        }
    }
}
