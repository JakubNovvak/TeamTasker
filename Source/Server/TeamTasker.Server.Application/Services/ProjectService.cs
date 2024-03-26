using AutoMapper;
using TeamTasker.Server.Application.Dtos.Projects;
using TeamTasker.Server.Application.Dtos.Teams;
using TeamTasker.Server.Application.Interfaces;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Infrastructure.Services
{
    public class ProjectService : IProjectService
    {
        private readonly IProjectRepository _projectRepository;
        private readonly IMapper _mapper;

        public ProjectService(IProjectRepository projectRepository, IMapper mapper)
        {
            _projectRepository = projectRepository;
            _mapper = mapper;
        }

        public ReadDetailedProjectDto CreateProject(CreateProjectDto projectDto)
        {
            if (projectDto == null)
                throw new ArgumentNullException(nameof(projectDto));

            var project = _mapper.Map<Project>(projectDto);
            _projectRepository.CreateProject(project);

            var readProjectDto = _mapper.Map<ReadDetailedProjectDto>(project);
            return readProjectDto;
        }

        public IEnumerable<ReadDetailedProjectDto> GetAllProjects()
        {
            var projects = _projectRepository.GetAllProjects();
            var projectDtos = _mapper.Map<IEnumerable<ReadDetailedProjectDto>>(projects);

            return projectDtos;
        }

        public ReadDetailedProjectDto GetProjectById(int id)
        {
            var project = _projectRepository.GetProject(id);

            if (project == null)
                throw new ArgumentNullException(nameof(project));

            var projectDto = _mapper.Map<ReadDetailedProjectDto>(project);

            return projectDto;
        }

        public ReadDetailedProjectDto UpdateProject(CreateTeamDto projectDto)
        {
            throw new NotImplementedException();
        }
    }
}
