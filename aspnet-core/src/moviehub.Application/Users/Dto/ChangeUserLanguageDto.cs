using System.ComponentModel.DataAnnotations;

namespace moviehub.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}