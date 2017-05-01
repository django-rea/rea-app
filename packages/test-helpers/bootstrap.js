/**
 * Bootstrapping file for AVA tests
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-05-01
 * @flow
 */

require.extensions['.scss'] = function(m, filename) {}
require.extensions['.sass'] = function(m, filename) {}
require.extensions['.less'] = function(m, filename) {}
require.extensions['.css'] = function(m, filename) {}

require.extensions['.svg'] = function(m, filename) {}
require.extensions['.png'] = function(m, filename) {}
require.extensions['.jpg'] = function(m, filename) {}
