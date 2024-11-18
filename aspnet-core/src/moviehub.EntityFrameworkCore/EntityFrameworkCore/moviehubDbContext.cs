using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using moviehub.Authorization.Roles;
using moviehub.Authorization.Users;
using moviehub.MultiTenancy;
using Abp.Localization;
using System;

namespace moviehub.EntityFrameworkCore
{
    public class moviehubDbContext : AbpZeroDbContext<Tenant, Role, User, moviehubDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public moviehubDbContext(DbContextOptions<moviehubDbContext> options)
            : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
            AppContext.SetSwitch("Npgsql.DisableDateTimeInfinityConversions", true);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ApplicationLanguageText>()
                .Property(p => p.Value)
                .HasMaxLength(100); // any integer that is smaller than 10485760
        }
    }
}
