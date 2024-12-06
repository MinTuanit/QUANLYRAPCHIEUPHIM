using System;
using System.Collections.Generic;

namespace QuanLyRapChieuPhim.Models;

public partial class Phong
{
    public int IdPhong { get; set; }

    public string? TenPhong { get; set; }

    public int? SoGheToiDa { get; set; }

    public virtual ICollection<Ghe> Ghes { get; set; } = new List<Ghe>();

    public virtual ICollection<LichChieuPhim> LichChieuPhims { get; set; } = new List<LichChieuPhim>();
}
