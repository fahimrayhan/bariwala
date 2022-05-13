
function edit() {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await fetch(
      '/api/admin/addproperty',
      {
        body: JSON.stringify({
          title: event.target.title.value,
          beds: event.target.beds.value,
          desc: event.target.desc.value,
          bath: event.target.bath.value,
          month: event.target.month.value,
          floor: event.target.floor.value,
          rent: event.target.rent.value,
          type: event.target.type.value,
          area: event.target.area.value,
          pid: event.target.pid.value,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'UPDATE'
      }
    )
    const results = await res.json()
    // console.log(results)
    toast(JSON.stringify(results.msg));
  }


  return (
    <div>edit</div>
  )
}

export default edit