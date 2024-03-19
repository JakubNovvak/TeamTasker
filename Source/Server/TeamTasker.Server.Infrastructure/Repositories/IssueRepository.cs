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
    public class IssueRepository : IIssueRepository
    {
        private readonly AppDbContext _appDbContext;

        //TODO: Fix issues with the database access

        public IssueRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public void CreateIssue(Issue issue)
        {
            if (issue == null)
                throw new ArgumentNullException();

            _appDbContext.Add(issue);
            _appDbContext.SaveChanges();
        }

        public IEnumerable<Issue> GetAllIssues()
        {
            var allDbIssues = _appDbContext.Issues.ToList();

            return allDbIssues;
        }

        public Issue GetIssue(int id)
        {
            return _appDbContext.Issues.FirstOrDefault(issue => issue.Id == id);
        }
    }
}
