using Microsoft.AspNetCore.Mvc;
using PortfolioProjectMVC.Models;
using System.Diagnostics;
using System.Net.Mail;
using System.Net;
using Microsoft.Extensions.Configuration;
using GoogleReCaptcha.V3.Interface;

namespace PortfolioProjectMVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;
        private readonly ICaptchaValidator _captchaValidator;

        public HomeController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult SendEmail (ContactForm contactForm)
        {
            var smtpServer = _configuration["EmailSettings:SmtpServer"];
            var password = _configuration["EmailSettings:Password"];

            try
            {

                var smtpClient = new SmtpClient(smtpServer)
                {
                    Port = 587,
                    Credentials = new NetworkCredential("samscreativespace@gmail.com", password),
                    EnableSsl = true,
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(contactForm.Email),
                    Subject = "Query From " + contactForm.Name,
                    Body = contactForm.Query,
                    IsBodyHtml = true,
                };
                mailMessage.To.Add("samscreativespace@gmail.com"); 

                smtpClient.Send(mailMessage);

                _logger.LogInformation("Email sent successfully.");

                return RedirectToAction("Index"); 
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error: {ex.Message}");
                return RedirectToAction("Index"); 
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}