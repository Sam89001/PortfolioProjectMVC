using System.ComponentModel.DataAnnotations;

namespace PortfolioProjectMVC.Models
{
    public class ContactForm
    {

        public string Name { get; set; }

        [Required(ErrorMessage = "Email Required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Query Required")]
        public string Query { get; set; }
    }
}
