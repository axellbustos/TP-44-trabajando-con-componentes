import React from 'react'
import { ContentRowTop } from './ContentRowTop'
import { ContentRowsOfTable } from './ContentRowsOfTable'
import { Footer } from './Footer'
import { TopBar } from './TopBar'

export const ContentWrapper = () => {
	let movies = [
		{
			title: 'Billy Eliot',
			length: 123,
			rating: 5,
			genre: "drama comedia",
			awards: 2
		},
		{
			title: 'Alicia en el pais de las maravillas',
			length: 142,
			rating: 4.8,
			genre: "drama accion comedia",
			awards: 3
		}
	]
	return (
		<div id="content-wrapper" className="d-flex flex-column">

			<div id="content">
				<TopBar />
				<ContentRowTop />
			</div>
			<table className="default" border="1">
				<tr key="">
					<th>Titulo</th>
					<th>Duracion</th>
					<th>Rating</th>
					<th>Genero</th>
					<th>Premios</th>
				</tr>

				{
					movies.map((movie, index) => (
						<ContentRowsOfTable {...movie} />
					))
				}

			</table>

			<Footer />

		</div>
	)
}
