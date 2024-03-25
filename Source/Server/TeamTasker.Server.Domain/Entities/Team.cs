using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamTasker.Server.Domain.Entities
{
    public class Team
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public virtual Project Project { get; set; } = default!;
        public int ProjectId { get; set; }
        public virtual Employee Leader { get; set; } = default!;
        public int LeaderId { get; set; }
        public virtual ICollection<Employee> Employees { get; set; } = default!;
        public virtual ICollection<Comment> Notifications { get; set; } = default;
    }
}
