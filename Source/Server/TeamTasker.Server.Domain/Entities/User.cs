using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamTasker.Server.Domain.Entities
{
    public class User
    {
        public User() { }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public virtual ICollection<Project> Projects { get; set; }
        public int Role { get; set; }

    }
}
