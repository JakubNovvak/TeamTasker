using AutoMapper;
using System.Data;
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

        public ProjectService(IProjectRepository projectRepository,ITeamRepository teamRepository,IMapper mapper)
        {
            _projectRepository = projectRepository;
            _teamRepository = teamRepository;
            _mapper = mapper;
        }
        //1
        public int CreateProject(CreateProjectDto projectDto)
        {
            if (projectDto == null)
                throw new ArgumentNullException(nameof(projectDto));

            var project = _mapper.Map<Project>(projectDto);

            _projectRepository.CreateProject(project);

            return project.Id;
        }
        //1
        public void AddTeamToProject(AddTeamToProjectDto teamToProjectDto)
        {
            if (teamToProjectDto == null)
                throw new ArgumentNullException(nameof(teamToProjectDto));

            var project = _projectRepository.GetProject(teamToProjectDto.ProjectId);

            if (project == null)
                throw new Exception("Project not found");

            var team = _mapper.Map<Team>(teamToProjectDto);
            _teamRepository.CreateTeam(team);


            project.TeamId = team.Id;
            project.Name = team.Name;
            _projectRepository.UpdateProject(project);
        }
        //1
        public void UpdateTeamToProject(UpdateTeamToProjectDto teamToProjectDto)
        {
            if (teamToProjectDto == null)
                throw new ArgumentNullException(nameof(teamToProjectDto));

            var project = _projectRepository.GetProject(teamToProjectDto.Id);
            var team = _teamRepository.GetTeam(teamToProjectDto.TeamId);


            if (team == null)
            {
                throw new Exception("Team not found.");
            }

            if (project == null)
            {
                throw new Exception("Project not found.");
            }

            project.TeamId = team.Id;
            _projectRepository.UpdateProject(project);

        }

        //1
        public GetProjectNameAndImaginesDto GetProjectNameAndImagines(GetProjectNameAndImaginesDto projectNameAndImaginesDto)
        {
            if (projectNameAndImaginesDto == null)
                throw new ArgumentNullException(nameof(projectNameAndImaginesDto));

            var project = _projectRepository.GetProject(projectNameAndImaginesDto.ProjectId);

            if (project == null)
                throw new Exception("Project not found");

            var projectName = project.Name;
            var projectImages = new Dictionary<int, string>();

            // Ścieżka do folderu zawierającego obrazy związane z projektem
            string projectImagesFolderPath = Path.Combine("ProjectImages", projectName);

            // Sprawdzenie, czy folder z obrazami istnieje
            if (!Directory.Exists(projectImagesFolderPath))
                throw new Exception("Project images folder not found");

            // Pobranie wszystkich plików obrazów w folderze projektu
            string[] imageFiles = Directory.GetFiles(projectImagesFolderPath);

            // Dodanie każdego obrazu do mapy obrazów projektu
            foreach (string imagePath in imageFiles)
            {
                // Pobranie nazwy pliku (bez ścieżki)
                string imageName = Path.GetFileName(imagePath);
                // Dodanie obrazu do mapy
                projectImages.Add(projectImages.Count + 1, imageName);
            }

            // Tworzenie nowego obiektu DTO i przypisanie nazwy projektu i mapy obrazów
            var resultDto = new GetProjectNameAndImaginesDto
            {
                Name = projectName,
                Imagines = projectImages
            };

            // Zwracanie obiektu DTO
            return resultDto;
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
