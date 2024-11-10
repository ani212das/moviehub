using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace moviehub.EntityFrameworkCore
{
    public static class moviehubDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<moviehubDbContext> builder, string connectionString)
        {
            builder.UseNpgsql(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<moviehubDbContext> builder, DbConnection connection)
        {
            builder.UseNpgsql(connection);
        }
    }
}
