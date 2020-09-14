import React, {useCallback} from 'react'
import {goTo} from 'route-history'

const NotFound: React.FC = () => {
    const revert = useCallback(() => goTo('/'), [])

    return (
        <div onClick={revert}>
            404 Not found
        </div>
    )
}

export default NotFound
