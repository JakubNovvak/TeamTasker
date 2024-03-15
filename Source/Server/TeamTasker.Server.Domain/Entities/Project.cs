using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamTasker.Server.Domain.Entities
{
    public class Project
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public DateTime Deadline { get; set; }
        public bool IsComplete { get; set; }
        public virtual Team Team { get; set; } = default!;
        public virtual ICollection<Issue> Issues { get; set; } = default!;
    }
}
