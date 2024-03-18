using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamTasker.Server.Application.Dtos
{
    public class CreateIssueDto
    {
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime Deadline { get; set; }
        public int Prioroty { get; set; }
        public string LeaderName { get; set; } = string.Empty;
        public int LeaderId { get; set; }
        public string EmployeeName { get; set; } = string.Empty;
        public int EmployeeId { get; set; }
        public string ProjectName { get; set; } = string.Empty;
        public int ProjectId { get; set; }
    }
}
