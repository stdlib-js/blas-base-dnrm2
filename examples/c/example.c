/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/blas/base/dnrm2.h"
#include <stdio.h>

int main( void ) {
	// Create a strided array:
	const double x[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };

	// Specify the number of elements:
	const int N = 8;

	// Specify a stride:
	const int strideX = 1;

	// Compute the L2-norm:
	double l2 = c_dnrm2( N, x, strideX );

	// Print the result:
	printf( "L2-norm: %lf\n", l2 );

	// Compute the L2-norm:
	l2 = c_dnrm2_ndarray( N, x, -strideX, N-1 );

	// Print the result:
	printf( "L2-norm: %lf\n", l2 );
}
