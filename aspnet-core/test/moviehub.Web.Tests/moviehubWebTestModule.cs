using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using moviehub.EntityFrameworkCore;
using moviehub.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace moviehub.Web.Tests
{
    [DependsOn(
        typeof(moviehubWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class moviehubWebTestModule : AbpModule
    {
        public moviehubWebTestModule(moviehubEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(moviehubWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(moviehubWebMvcModule).Assembly);
        }
    }
}