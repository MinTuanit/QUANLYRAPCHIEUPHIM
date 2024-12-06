using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuanLyRapChieuPhim.Models;

namespace QuanLyRapChieuPhim.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrudPhong : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllPhong()
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    return Ok(dbcontext.Phongs.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult AddPhong(string TenPhong, int SoGheToiDa)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    Phong phong = new Phong()
                    {
                        TenPhong = TenPhong,
                        SoGheToiDa = SoGheToiDa,                        
                    };
                    dbcontext.Add(phong);
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.Phongs.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        public IActionResult DeletePhong(int id)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    Phong phong = dbcontext.Phongs.Find(id);
                    dbcontext.Remove(phong);
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.Phongs.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public IActionResult UpdatePhong(int id, string TenPhong, int SoGheToiDa)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    Phong phong = dbcontext.Phongs.Find(id);
                    phong.TenPhong = TenPhong;
                    phong.SoGheToiDa = SoGheToiDa;            
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.Phongs.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
