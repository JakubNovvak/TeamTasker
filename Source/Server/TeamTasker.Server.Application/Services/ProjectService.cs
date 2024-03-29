using AutoMapper;
using TeamTasker.Server.Application.Dtos.Projects;
using TeamTasker.Server.Application.Interfaces;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Application.Services
{
    public class ProjectService : IProjectService
    {
        private readonly IProjectRepository _projectRepository;
        private readonly ITeamRepository _teamRepository;
        private readonly IMapper _mapper;

        public ProjectService(IProjectRepository projectRepository,ITeamRepository teamRepository, IMapper mapper)
        {
            _teamRepository = teamRepository;
            _projectRepository = projectRepository;
            _mapper = mapper;
        }

        public int CreateProject(CreateProjectDto projectDto)
        {
            if (projectDto == null)
                throw new ArgumentNullException(nameof(projectDto));

            var project = _mapper.Map<Project>(projectDto);

            _projectRepository.CreateProject(project);

            return project.Id;
        }

        public void UpdateProjectTeam(UpdateProjectTeamDto teamDto)
        {

                if(teamDto == null)
                    throw new ArgumentNullException(nameof(teamDto));
            
                var project = _projectRepository.GetProject(teamDto.Id);
                var team = _teamRepository.GetTeam(teamDto.TeamId);

                if (project == null )
                {
                    throw new Exception("Project not found.");
                }

                if (team == null)
                {
                    throw new Exception("Team not found.");
                }

                project.TeamId = teamDto.TeamId;
                _projectRepository.UpdateProject(project);
        }


        public IEnumerable<ReadProjectDto> GetAllProjects()
        {
            var projects = _projectRepository.GetAllProjects();
            var projectDtos = _mapper.Map<IEnumerable<ReadProjectDto>>(projects);

            return projectDtos;
        }

        public ReadProjectDto GetProject(int id)
        {
            var project = _projectRepository.GetProject(id);

            if (project == null)
                return null;

            var projectDto = _mapper.Map<ReadProjectDto>(project);

            return projectDto;
        }
    }
}
