import React from 'react';

class Clue extends React.Component {
    render() {
        const clue = this.props.clue;
        const satisfies = this.props.satisfies;
        
        return (
            <div className={"clue "+ (satisfies===1 ? "clueSatisfies":"")} >
                {clue.map((num, i) =>
                    <div key={i}>
                        {num}
                    </div>
                )}
            </div>
        );
    }
}

export default Clue;