const React = require('react')
const Default = require('./Default')

function edit({bread, bakers}){
    return (
            <Default>
                <h2>Edit a new bread</h2>
                <div className="backButton">
                    <a href="/breads"><button>Go back to the index</button></a>
                </div>
                <form action={`/breads/${bread.id}?_method=PUT`} method="POST">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"/>
                <label htmlFor="hasGluten">Has Gluten?</label>
                <input
                    type="checkbox"
                    name="hasGluten"
                    id="hasGluten"
                    defaultChecked
                />
                <label htmlFor="baker">Baker</label>
                <select name="baker" id="baker" defaultValue={bread.baker}>
                    {bakers.map((baker) => {
                        return(
                            <option value={baker.id} key={baker.id}>{baker.name}</option>
                        )
                    })}
                </select>

                <br />
                <input type="submit"/>
                
                </form>
            </Default>
      )
}

module.exports = edit
