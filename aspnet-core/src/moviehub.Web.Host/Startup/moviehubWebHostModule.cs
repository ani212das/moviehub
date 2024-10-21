using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using moviehub.Configuration;

namespace moviehub.Web.Host.Startup
{
    [DependsOn(
       typeof(moviehubWebCoreModule))]
    public class moviehubWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public moviehubWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(moviehubWebHostModule).GetAssembly());
        }
    }
}
