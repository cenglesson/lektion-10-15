import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { actions } from '../features/cartReducer'
import { Product } from '../models/Product'
import '../App.css';
import { CARTVIEW, PRODUCTVIEW } from '../features/viewReducer';
import CartView from './CartView';
import Nav from './NavView';

const ProductGrid = () => {
	const dispatch = useDispatch()
	const products = useSelector((state: RootState) => state.products)

	const addToCart = (p: Product) => dispatch(actions.addProduct(p))

	const view = useSelector((state: RootState) => state.view)
	const cart = useSelector((state: RootState) => state.cart)

	let main = null
	if (view === PRODUCTVIEW) {
		main = <ProductGrid />
	}
	else if (view === CARTVIEW) {
		main = <CartView />
	}

	return (
		<div>
			<Nav />
			<div className="cards">

				{products.map(p => (
					<div key={p.name} className=".">
						<div className="card">
							<img src={p.picture} className="card__image" alt="" />
							<div onClick={() => addToCart(p)} className="card__overlay">
								<div className="card__header">
									<svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<img className="card__thumb" src="https://media.istockphoto.com/vectors/shopping-cart-icon-vector-id1128229893?k=20&m=1128229893&s=612x612&w=0&h=uOQYRr-vTDnW60Mn8MWSwt6i9uK2SGni8jR1CKKELK8=" alt="" />
									<div className="card__header-text">
										<h3 className="card__title">{p.name}</h3>
									</div>
								</div>
								<p className="card__description">{p.info}</p>


							</div>
						</div>



					</div>
				))}


			</div>
			<div>
				<br />
				Vald vy: {view}
				<br />
				Cart has {cart.length} items.
			</div>

		</div>


	)
}

export default ProductGrid
