using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace TeamTasker.Server.Domain.Entities
{
    public class Issue
    { 
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual User Reporter { get; set; }
        public int ReporterId { get; set; }
        public virtual User Assignee { get; set; }
        public int AssigneeId { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual Project Project { get; set; }
        public int ProjectId { get; set; }

    }
}
