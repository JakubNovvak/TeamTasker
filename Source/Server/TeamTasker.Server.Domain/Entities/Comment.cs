using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamTasker.Server.Domain.Entities
{
    public class Comment
    {
        [Key]
        public int Id { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public string Content { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public virtual ICollection<User> Users { get; set; } = default!;
        public virtual Issue Issue { get; set; } = default!;
        [ForeignKey("Issue")]
        public int? IssueId { get; set; }
        public virtual Project Project { get; set; } = default!;
         [ForeignKey("Project")]
        public int? ProjectId { get; set; }
        public virtual Team Team { get; set; } = default!;
        [ForeignKey("Team")]
        public int? TeamId { get; set; }

    }
}
