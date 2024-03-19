﻿using System;
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
        public DateTime Deadline { get; set; }
        public int Prioroty { get; set; }
        public bool IsComplete { get; set; }
        public DateTime? CompleteTime { get; set; }
        public virtual Leader Leader { get; set; } = default!;
        //[ForeignKey("Leader")]
        public int LeaderId { get; set; }
        public virtual Employee Employee { get; set; } = default!;
        [ForeignKey("Employee")]
        public int EmployeeId { get; set; }
        public virtual ICollection<Comment> Comments { get; set; } = default!;
        public virtual Project Project { get; set; } = default!;
        [ForeignKey("Project")]
        public int ProjectId { get; set; }
    }
}