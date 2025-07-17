import { useRef, useEffect, useState } from "react";

function Doodle() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#333333");
  const [lineWidth, setLineWidth] = useState(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!canvas.dataset.initialized) {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    canvas.dataset.initialized = true;
  }

    const startDrawing = (e) => {
      const rect = canvas.getBoundingClientRect();
      ctx.beginPath();
      ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
      setIsDrawing(true);
    };

    const draw = (e) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.stroke();
    };

    const stopDrawing = () => {
      ctx.closePath();
      setIsDrawing(false);
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseleave", stopDrawing);
    };
  }, [isDrawing, color, lineWidth]);

  // 🔹 Clear canvas
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // 🔹 Save as image
  const saveAsImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "artroom-doodle.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">🎨 Doodle Pad</h2>

      <div className="flex gap-4 mb-4 flex-wrap justify-center">
        <div>
          <label className="block mb-1 text-sm">Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-10 h-10 p-1 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Pen Width</label>
          <input
            type="range"
            min="1"
            max="10"
            value={lineWidth}
            onChange={(e) => setLineWidth(parseInt(e.target.value))}
          />
        </div>

        <button
          onClick={clearCanvas}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          🧹 Clear
        </button>

        <button
          onClick={saveAsImage}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          💾 Save
        </button>
      </div>

      <canvas
        ref={canvasRef}
        className="border border-gray-400 rounded bg-white w-full max-w-2xl h-[400px] shadow"
      />
    </div>
  );
}
export default Doodle;
