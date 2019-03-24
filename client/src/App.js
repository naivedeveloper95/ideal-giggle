import React from 'react';
import './App.css';

const App = () => {
	return (
		<div>
			<nav class="navbar navbar-light bg-dark">
				<a class="navbar-brand colorClass">BuyIt</a>
				<form class="form-inline">
					<input
						class="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button
						class="btn btn-outline-success my-2 my-sm-0"
						type="submit"
					>
						Search
					</button>
				</form>
			</nav>
			<div class="container-fluid">
				<div class="row content">
					<div class="col-sm-2 styleClass">
						<p>
							<input type="checkbox" />
							Type1
						</p>
						<p>
							<input type="checkbox" />
							Type2
						</p>
						<p>
							<input type="checkbox" />
							Type3
						</p>
					</div>
					<div class="col-sm-10 styleClass">
						<div class="card-deck">
							<div class="card">
								<div class="card-body">
									<h5 class="card-title">Product 1</h5>
									<p class="card-text">
										This is a static entry. Not yet
										integrated with db.
									</p>
									<p class="card-text">
										<small class="text-muted">
											Last updated 3 mins ago
										</small>
									</p>
								</div>
							</div>
							<div class="card">
								<div class="card-body">
									<h5 class="card-title">New Products</h5>
									<p class="card-text">
										This is a static entry. Not yet
										integrated with db
									</p>
									<p class="card-text">
										<small class="text-muted">
											Last updated 3 mins ago
										</small>
									</p>
								</div>
							</div>
							<div class="card">
								<div class="card-body">
									<h5 class="card-title">Other product</h5>
									<p class="card-text">
										This is a static entry. Not yet
										integrated with db
									</p>
									<p class="card-text">
										<small class="text-muted">
											Last updated 3 mins ago
										</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
