using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TeamTasker.Server.Domain.Entities;

namespace TeamTasker.Server.Infrastructure.Presistence
{
    public class AppDbContext : DbContext
    {
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Team> Teams { get; set; }
        public virtual DbSet<Project> Projects { get; set; }
        public virtual DbSet<Issue> Issues { get; set; }
        public virtual DbSet<Comment> Comments { get; set; }
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            // optionsBuilder.UseLazyLoadingProxies();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Issue>()
                .HasOne(i => i.Leader)                     
                .WithMany(i => i.ReportedIssues)           
                .HasForeignKey(i => i.LeaderId)            
                .OnDelete(DeleteBehavior.Restrict);        

            modelBuilder.Entity<User>()
                .ToTable("Users")
                .HasDiscriminator<string>("Role")
                .HasValue<User>("Admin")
                .HasValue<Leader>("Leader")
                .HasValue<Employee>("Employee");

            modelBuilder.Entity<UserNotification>()
                .HasKey(un => new { un.NotificationId, un.UserId });

            modelBuilder.Entity<UserNotification>()
                .HasOne(n => n.Notification)
                .WithMany(un => un.UserNotifications)
                .HasForeignKey(n => n.NotificationId);

            modelBuilder.Entity<UserNotification>()
                .HasOne(u => u.User)
                .WithMany(un => un.UserNotifications)
                .HasForeignKey(u => u.UserId)
                .OnDelete(DeleteBehavior.Restrict); 

            modelBuilder.Entity<EmployeeTeam>()
                .HasKey(et => new { et.TeamId, et.EmployeeId });

            modelBuilder.Entity<EmployeeTeam>()
                .HasOne(t => t.Team)
                .WithMany(et => et.EmployeeTeams)
                .HasForeignKey(t => t.TeamId);

            modelBuilder.Entity<EmployeeTeam>()
                .HasOne(e => e.Employee)
                .WithMany(et => et.EmployeeTeams)
                .HasForeignKey(e => e.EmployeeId)
                .OnDelete(DeleteBehavior.Restrict);
        }

    }
}
