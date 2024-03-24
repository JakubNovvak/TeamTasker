using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Application.Dtos.Comments;
using TeamTasker.Server.Domain.Entities;

namespace TeamTasker.Server.Application.Dtos.Issues
{
    public class ReadIssueDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime Deadline { get; set; }
        public int Prioroty { get; set; }
        public bool IsComplete { get; set; }
        public DateTime? CompleteTime { get; set; }
        public string LeaderName { get; set; } = string.Empty;
        public int LeaderId { get; set; }
        public string EmployeeName { get; set; } = string.Empty;
        public int EmployeeId { get; set; }
        public ICollection<ReadCommentDto> Comments { get; set; } = default!;
        public string ProjectName { get; set; } = string.Empty;
        public int ProjectId { get; set; }
    }
}
