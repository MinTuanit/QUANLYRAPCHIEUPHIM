using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuanLyRapChieuPhim.Models;

namespace QuanLyRapChieuPhim.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrudAccount : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllAccount()
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    return Ok(dbcontext.TaiKhoans.ToList());
                }
            }
            catch (Exception ex) 
            { 
                return BadRequest(ex.Message);
            }           
        }

        [HttpPost]
        public IActionResult AddAccount(string TenDangNhap, string MatKhau, string VaiTro)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    TaiKhoan tk = new TaiKhoan();
                    tk.TenDangNhap = TenDangNhap;
                    tk.MatKhau = MatKhau;
                    tk.VaiTro = VaiTro;
                    dbcontext.Add(tk);
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.TaiKhoans.ToList());
                }
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }                        
        }

        [HttpDelete]
        public IActionResult DeleteAccount(int id)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    TaiKhoan tk = dbcontext.TaiKhoans.Find(id);
                    dbcontext.Remove(tk);
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.TaiKhoans.ToList());
                }
            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }                        
        }

        [HttpPut]
        public IActionResult UpdateAccount(int id, string TenDangNhap, string MatKhau, string VaiTro)
        {
            try
            {
                using (var dbcontext = new QuanLyRapChieuPhimContext())
                {
                    TaiKhoan tk = dbcontext.TaiKhoans.Find(id);
                    tk.TenDangNhap = TenDangNhap;
                    tk.MatKhau = MatKhau;
                    tk.VaiTro = VaiTro;
                    dbcontext.SaveChanges();
                    return Ok(dbcontext.TaiKhoans.ToList());
                }
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }                        
        }
    }
}
