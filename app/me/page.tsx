"use client";

import { useState } from "react";

const backImg = "/back.png";
const comicBg = "/comic.png";
const frontImg = "/front.png";
const nfIcon = "/nf-icon.png";

const sizes = [
  { size: "XS", chest: '34"', length: '27"', shoulder: '16"' },
  { size: "S",  chest: '36"', length: '28"', shoulder: '17"' },
  { size: "M",  chest: '38"', length: '29"', shoulder: '18"' },
  { size: "L",  chest: '40"', length: '30"', shoulder: '19"' },
  { size: "XL", chest: '42"', length: '31"', shoulder: '20"' },
  { size: "XXL",chest: '44"', length: '32"', shoulder: '21"' },
];


function ShirtCard() {
  const [showBack, setShowBack] = useState(false);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
      

    <div style={{ fontFamily: "'Bangers', cursive", color: "#000" }}>

      <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@700&display=swap');
        .shirt-card { width:340px; border-radius:16px; background:#fff; border:3px solid #000; box-shadow:6px 6px 0 #000; overflow:hidden; }
        .track-wrap { width:100%; overflow:hidden; height:360px; background:#000; border-bottom:3px solid #000; position:relative; }
        .image-track { display:flex; width:200%; height:100%; transition:transform 0.45s cubic-bezier(0.77,0,0.18,1); }
        .image-slot { width:50%; height:100%; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
        .image-slot img { width:100%; height:100%; object-fit:contain; }
        .slide-label { position:absolute; top:10px; left:10px; background:#FFE500; border:2px solid #000; box-shadow:2px 2px 0 #000; font-family:'Bangers',cursive; font-size:14px; letter-spacing:1px; padding:2px 10px; border-radius:20px; z-index:2; }
        .toggle-row { display:flex; gap:8px; justify-content:center; padding:10px 0 4px; }
        .toggle-btn { font-family:'Bangers',cursive; letter-spacing:1.5px; font-size:15px; padding:4px 18px; border-radius:20px; border:2.5px solid #000; cursor:pointer; transition:all 0.15s; box-shadow:2px 2px 0 #000; }
        .toggle-btn.active { background:#000; color:#FFE500; }
        .toggle-btn:not(.active) { background:#fff; color:#000; }
        .toggle-btn:hover:not(.active) { background:#FFE500; }
        .info-section { padding:12px 16px 16px; text-align:center; }
        .shirt-title { font-family:'Bangers',cursive; font-size:28px; letter-spacing:2px; color:#000; margin:0; }
        .shirt-price { font-family:'Comic Neue',cursive; font-size:20px; font-weight:700; color:#e00; margin:2px 0 10px; }
        .size-row { display:flex; gap:6px; justify-content:center; flex-wrap:wrap; margin-bottom:10px; }
        .size-btn { font-family:'Bangers',cursive; font-size:16px; letter-spacing:1px; width:42px; height:42px; border-radius:8px; border:2.5px solid #000; cursor:pointer; background:#fff; box-shadow:2px 2px 0 #000; transition:all 0.12s; }
        .size-btn.selected { background:#FFE500; box-shadow:3px 3px 0 #000; transform:translate(-1px,-1px); }
        .size-btn:hover:not(.selected) { background:#f0f0f0; }
        .size-chart-btn { font-family:'Bangers',cursive; font-size:14px; letter-spacing:1px; background:none; border:none; cursor:pointer; text-decoration:underline wavy #e00; color:#000; margin-bottom:10px; padding:2px 4px; }
        .buy-btn { width:100%; font-family:'Bangers',cursive; font-size:22px; letter-spacing:2px; background:#000; color:#FFE500; border:none; padding:10px; border-radius:10px; cursor:pointer; box-shadow:4px 4px 0 #555; transition:all 0.12s; }
        .buy-btn:hover { transform:translate(-2px,-2px); box-shadow:6px 6px 0 #555; }
        .overlay { position:fixed; inset:0; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:999; }
        .modal { background:#fffbe6; border:4px solid #000; border-radius:16px; box-shadow:8px 8px 0 #000; padding:24px; min-width:320px; position:relative; animation:popIn 0.2s ease; }
        @keyframes popIn { from{transform:scale(0.85);opacity:0} to{transform:scale(1);opacity:1} }
        .modal h2 { font-family:'Bangers',cursive; font-size:34px; letter-spacing:3px; margin:0 0 4px; text-align:center; }
        .modal-sub { text-align:center; font-family:'Comic Neue',cursive; font-size:12px; color:#666; margin-bottom:16px; }
        .size-table { width:100%; border-collapse:collapse; font-family:'Comic Neue',cursive; font-weight:700; }
        .size-table th { font-family:'Bangers',cursive; font-size:18px; letter-spacing:1px; background:#000; color:#FFE500; padding:6px 10px; text-align:center; border:2px solid #000; }
        .size-table td { padding:7px 10px; text-align:center; border:2px solid #000; font-size:15px; }
        .size-table tr:nth-child(even) td { background:#fff3b0; }
        .size-table tr:nth-child(odd) td { background:#fff; }
        .size-table tr:hover td { background:#FFE500; }
        .close-btn { position:absolute; top:10px; right:12px; font-family:'Bangers',cursive; font-size:22px; background:#e00; color:#fff; border:2.5px solid #000; width:34px; height:34px; border-radius:50%; cursor:pointer; box-shadow:2px 2px 0 #000; display:flex; align-items:center; justify-content:center; padding:0; }
        .close-btn:hover { background:#c00; }
        .pow { display:inline-block; background:#FFE500; border:3px solid #000; border-radius:50%; font-family:'Bangers',cursive; font-size:13px; letter-spacing:1px; padding:4px 10px; box-shadow:3px 3px 0 #000; transform:rotate(-4deg); margin-bottom:10px; }
      `}</style>

      <div className="shirt-card">
        <div className="track-wrap">
          <div className="image-track" style={{ transform: showBack ? "translateX(-50%)" : "translateX(0%)" }}>
            <div className="image-slot">
              <span className="slide-label">FRONT</span>
              <img src={frontImg} alt="Front" />
            </div>
            <div className="image-slot">
              <span className="slide-label">BACK</span>
              <img src={backImg} alt="Back" />
            </div>
          </div>
        </div>

        <div className="toggle-row">
          <button className={`toggle-btn${!showBack ? " active" : ""}`} onClick={() => setShowBack(false)}>FRONT</button>
          <button className={`toggle-btn${showBack ? " active" : ""}`} onClick={() => setShowBack(true)}>BACK</button>
        </div>

        <div className="info-section">
          <p className="shirt-title">NF COMIC TEE</p>
          <p className="shirt-price">₹499</p>
          <div className="size-row">
            {["XS","S","M","L","XL","XXL"].map(s => (
              <button key={s} className={`size-btn${selectedSize===s?" selected":""}`} onClick={() => setSelectedSize(s)}>{s}</button>
            ))}
          </div>
          <div>
            <button className="size-chart-btn" onClick={() => setShowSizeChart(true)}>📏 Size Chart (dont guess, measure!)</button>
          </div>
          <button className="buy-btn">💥 BUY NOW!</button>
        </div>
      </div>

      {showSizeChart && (
        <div className="overlay" onClick={() => setShowSizeChart(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowSizeChart(false)}>✕</button>
            <h2 style={{color : "#000000"}}>📐 SIZE CHART</h2>
            <p className="modal-sub">⚡ All measurements in inches · Lay flat & measure ⚡</p>
            <div style={{ textAlign:'center', marginBottom:12, color : "#000000" }}>
              <span className="pow">POW! FIT GUIDE</span>
            </div>
            <table className="size-table" style={{color : "#000000"}}>
              <thead>
                <tr><th>SIZE</th><th>CHEST</th><th>LENGTH</th><th>SHOULDER</th></tr>
              </thead>
              <tbody>
                {sizes.map(row => (
                  <tr key={row.size}>
                    <td style={{ fontFamily:"'Bangers',cursive", fontSize:18, letterSpacing:1 }}>{row.size}</td>
                    <td>{row.chest}</td>
                    <td>{row.length}</td>
                    <td>{row.shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontFamily:"'Comic Neue',cursive", fontSize:11, color:'#888', textAlign:'center', marginTop:12, marginBottom:0 }}>
              🦸 When in doubt, size up! Our tees are true to size.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MerchPage() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundImage: `url(${comicBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@700&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <div style={{ textAlign:"center", marginBottom:40 }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, marginBottom:8 }}>
          <img src={nfIcon} alt="NF Icon" style={{ width:70, height:70, borderRadius:"50%", border:"3px solid #000", boxShadow:"3px 3px 0 #000" }} />
          <h1 style={{
            fontFamily:"'Bangers',cursive",
            fontSize:"clamp(52px,10vw,86px)",
            letterSpacing:6,
            color:"#FFE500",
            textShadow:"4px 4px 0 #000,-2px -2px 0 #000,2px -2px 0 #000",
            lineHeight:1,
            margin:0,
          }}>NITTFEST</h1>
        </div>
        <div style={{
          display:"inline-block",
          background:"#e00",
          color:"#fff",
          fontFamily:"'Bangers',cursive",
          fontSize:22,
          letterSpacing:5,
          padding:"4px 24px",
          border:"3px solid #000",
          boxShadow:"4px 4px 0 #000",
          borderRadius:4,
          transform:"rotate(-1deg)",
        }}>✦ MERCHANDISE ✦</div>
      </div>

      <ShirtCard />
    </div>
  );
}