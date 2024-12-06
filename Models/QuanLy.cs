using System;
using System.Collections.Generic;

namespace QuanLyRapChieuPhim.Models;

public partial class QuanLy
{
    public int IdQl { get; set; }

    public string? HoTen { get; set; }

    public DateOnly? NgaySinh { get; set; }

    public string? GioiTinh { get; set; }

    public string? DienThoai { get; set; }

    public string? DiaChi { get; set; }

    public string? Cccd { get; set; }

    public int? IdTk { get; set; }

    public virtual TaiKhoan? IdTkNavigation { get; set; }
}
