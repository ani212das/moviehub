using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using moviehub.Authorization.Roles;
using moviehub.Authorization.Users;
using moviehub.MultiTenancy;

namespace moviehub.EntityFrameworkCore
{
    public class moviehubDbContext : AbpZeroDbContext<Tenant, Role, User, moviehubDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public moviehubDbContext(DbContextOptions<moviehubDbContext> options)
            : base(options)
        {
        }
    }
}
