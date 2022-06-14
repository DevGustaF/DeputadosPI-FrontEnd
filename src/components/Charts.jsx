import React from 'react'

const Charts = () => {


    DailyStars = [{
        date: Date,
        stars: number,
    }]

    Series = {
        label: string,
        data: DailyStars
    }

    const data = [
        {
            label: 'React Charts',
            data: [
                {
                    date: new Date(),
                    stars: 202123,
                }
                // ...
            ]
        },
        {
            label: 'React Query',
            data: [
                {
                    date: new Date(),
                    stars: 10234230,
                }
                // ...
            ]
        }
    ]

    return (
        <div>Charts</div>
    )
}

export default Charts