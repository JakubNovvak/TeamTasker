using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;
using TeamTasker.Server.Infrastructure.Presistence;

namespace TeamTasker.Server.Infrastructure.Repositories
{
    public class ProjectRepository : IProjectRepository
    {
        private readonly AppDbContext _appDbContext;
        public ProjectRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public void CreateProject(Project project)
        {
            if (project == null)
                throw new ArgumentNullException();

            _appDbContext.Add(project);
            _appDbContext.SaveChanges();
        }

        public IEnumerable<Project> GetAllProjects()
        {
            var allDbProjects = _appDbContext.Projects.ToList();

            return allDbProjects;
        }

        public Project GetProject(int id)
        {
            return _appDbContext.Projects.FirstOrDefault(project => project.Id == id);
        }
    }
}
