using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Application.Dtos.Issues;
using TeamTasker.Server.Application.Interfaces;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Application.Services
{
    public class LeaderService : ILeaderService
    {
        private readonly IIssueRepository _issueRepository;

        public LeaderService(IIssueRepository issueRepository) {
            _issueRepository = issueRepository;
        }
        public void AddIssueToEmployee(CreateIssueDto dto)
        {
            
        }
    }
}
