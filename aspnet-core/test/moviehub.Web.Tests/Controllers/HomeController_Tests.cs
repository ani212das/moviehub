using System.Threading.Tasks;
using moviehub.Models.TokenAuth;
using moviehub.Web.Controllers;
using Shouldly;
using Xunit;

namespace moviehub.Web.Tests.Controllers
{
    public class HomeController_Tests: moviehubWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}