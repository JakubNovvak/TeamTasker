using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace TeamTasker.Server.Domain.Entities
{
    public class Issue
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime StartDate {get; set; }
        public DateTime EndDate { get; set; }
        public string Priority { get; set; } = string.Empty;
        public StatusValue Status { get; set; } = StatusValue.NewIssue;
        public DateTime? CompleteTime { get; set; }
        public virtual Employee Employee { get; set; } = default!;
        public int EmployeeId { get; set; }
        public virtual ICollection<Comment> Comments { get; set; } = default!;
        public virtual Project Project { get; set; } = default!;
        public int ProjectId { get; set; }

    }
}
