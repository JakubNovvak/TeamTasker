using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Domain.Entities;

namespace TeamTasker.Server.Application.Dtos.Issues
{
    public class GetIssueByPriorityDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime Deadline { get; set; }
        public string Prioroty { get; set; }
        public string Status { get; set; }
        public DateTime? CompleteTime { get; set; }
        public int EmployeeId { get; set; }
        public int ProjectId { get; set; }
    }
}
