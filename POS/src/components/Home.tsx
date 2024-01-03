
import DefaultCard from "./cards/DefaultCard.tsx";
function  Home(){


    return(
        <>
            <br/>
            <div className="container">
                <div className='row'>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail='https://img.freepik.com/free-photo/medium-shot-people-shaking-hands_23-2149300663.jpg?size=626&ext=jpg&ga=GA1.2.32560783.1658732066&semt=sph'
                            description='This is a wider card with supporting text below as a natural '
                            title='customers'
                            value={250}
                            key={1}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail='https://img.freepik.com/premium-photo/large-warehouse-full-carboard-boxes-products-generative-ai_634358-472.jpg?size=626&ext=jpg&ga=GA1.1.32560783.1658732066&semt=ais'
                            description='This is a wider card with supporting text below as a natural'
                            title='products'
                            value={250}
                            key={1}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail='https://img.freepik.com/free-photo/red-shopping-cart-with-word-it-blue-background_1340-37271.jpg?size=626&ext=jpg&ga=GA1.1.32560783.1658732066&semt=sph'
                            description='This is a wider card with supporting text below as a natural '
                            title='orders'
                            value={250}
                            key={1}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail='https://img.freepik.com/premium-photo/growth-money-arrow-success-financial-business-coin-concept-investment-earnings-background-with-profit-graph-finance-development-increase-economic-market-chart-digital-stock-currency-strategy_79161-2472.jpg?size=626&ext=jpg&ga=GA1.1.32560783.1658732066&semt=sph'
                            description='This is a wider card with supporting text below as a natural '
                            title='income'
                            value={250}
                            key={1}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;