function ControlTareas({
  setMostrarCompletados,
  mostrarCompletados,
  borrarTareas,
  isChecked,
}: any) {

  const limpiarTareas = () => {
    if (window.confirm("Estas seguro que quieres hacer esto?")) {
      borrarTareas();
    }
  };

  return (
    <>
      <div>
        <div className="form-check form-switch">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(_e) => setMostrarCompletados(!mostrarCompletados)}
            className="form-check-input"
          />
          <label className="form-check-label">Mostrar tareas hechas</label>
        </div>
        {isChecked && (
          <button
            onClick={() => limpiarTareas()}
            className="btn btn-danger mb-2"
          >
            Limpiar
          </button>
        )}
      </div>
    </>
  );
}

export default ControlTareas;
